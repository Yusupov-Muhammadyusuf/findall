import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';

interface Service {
    id: string;
    name: string;
    url: string;
    description: string;
}

interface ExtendedService extends Service {
    category: string;
    uniqueId: string;
}

export function Product() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [service, setService] = useState<ExtendedService[]>([]);
    const [find, setFind] = useState("");

    const filteredService = service.filter(item => {
        const matchesCategory = selectedCategory === "" || item.category === selectedCategory;

        if (matchesCategory === null) {
            return "Not Available"
        }

        const matchesSearch = item.name.toLowerCase().includes(find.toLowerCase()) ||
            item.description.toLowerCase().includes(find.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        const productData = async () => {
            const [api, web, bot] = await Promise.all([
                axios.get('data/api.json'),
                axios.get('data/web.json'),
                axios.get('data/bot.json')
            ]);

            const apiServices = api.data.services.map((item: Service): ExtendedService => ({
                ...item,
                category: api.data.category,
                uniqueId: `api-${item.id}`
            }))

            const webServices = web.data.services.map((item: Service): ExtendedService => ({
                ...item,
                category: web.data.category,
                uniqueId: `web-${item.id}`
            }));

            const botServices = bot.data.services.map((item: Service): ExtendedService => ({
                ...item,
                category: bot.data.category,
                uniqueId: `bot-${item.id}`
            }));

            setService([
                ...apiServices,
                ...webServices,
                ...botServices
            ]);
        };

        productData();
    }, []);

    return (
        <>

            <title>Findall | Find your favourite Webs, Apis or Bots</title>

            <div className="d-flex align-items-start min-vh-100">
                {/* Offcanvas */}
                <div className="d-flex justify-content-center position-fixed">
                    <div
                        className="bg-light border-end"
                        style={{ width: "75px", height: "100vh" }}
                    >
                        <div className="d-flex flex-column align-items-center py-4 h-100">

                            <div className="d-flex flex-column align-items-center text-center gap-4 w-100">
                                <div className="text-dark mb-2">
                                    <i className="bi bi-list fs-3"></i>
                                </div>

                                <Link to="/" className="text-decoration-none text-secondary">
                                    <svg width="32" height="32">
                                        <path d="M5.25 13.495C5 14.255 5 15.093 5 16.765c0 3.96 0 5.94.898 7.392a6 6 0 0 0 1.944 1.944C9.293 27 11.274 27 15.234 27h1.532c3.96 0 5.94 0 7.392-.898a6 6 0 0 0 1.944-1.944C27 22.706 27 20.726 27 16.766c0-1.673 0-2.51-.25-3.271a5 5 0 0 0-.577-1.191c-.442-.67-1.098-1.189-2.41-2.227L20.515 7.51c-1.945-1.539-2.918-2.308-4.035-2.444a4 4 0 0 0-.962 0c-1.117.136-2.09.905-4.035 2.444l-3.246 2.567c-1.313 1.038-1.969 1.557-2.41 2.227-.245.37-.439.77-.577 1.19ZM19 17.108V22.2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5.093c0-.866.478-1.661 1.243-2.068a3.745 3.745 0 0 1 3.514 0A2.341 2.341 0 0 1 19 17.108Z" fill="currentColor"></path>
                                    </svg>
                                    Home
                                </Link>

                                <Link to="/contact" className="text-decoration-none text-secondary">
                                    <i className="bi bi-person-lines-fill fs-3"></i>
                                    Contact
                                </Link>

                            </div>

                            <div className="mt-auto mb-4">
                                <Link to="/faq" className="text-decoration-none text-secondary">
                                    <i className="bi bi-patch-question fs-3"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/homepage"
                        className='d-sm-block d-none text-decoration-none text-secondary fs-4 m-4'
                    >
                        Findall
                    </Link>
                </div>

                {/* Findall */}
                <div className="container mt-5 me-5 pt-5">
                    <section>
                        <h1 className="fw-normal text-primary text-center">
                            What will you search today?
                        </h1>
                    </section>

                    {/* Search section */}
                    <section className="input-group mx-auto mt-4 w-75">
                        <div className="form-floating">
                            <input
                                value={find}
                                onChange={(e) => setFind(e.target.value)}
                                type="text"
                                id="SearchInput"
                                className="form-control shadow-none border-2 rounded-start-4"
                                placeholder="Search one of them"
                                aria-describedby="search-icon"
                            />
                            <label htmlFor="SearchInput">Search one of them</label>
                        </div>

                        <span
                            className="input-group-text text-secondary border-2 rounded-end-4"
                            id="search-icon"
                            style={{ cursor: "text" }}
                        >
                            <i className="bi bi-search fs-5"></i>
                        </span>
                    </section>

                    {/* Help buttons */}
                    <section className='d-flex justify-content-center gap-3 mt-5'>
                        {['Web', 'API', 'Bot'].map((btn) => (
                            <button
                                key={btn}
                                onClick={() => setSelectedCategory(selectedCategory === btn ? "" : btn)}
                                className={`btn rounded-5 px-5 ${selectedCategory === btn
                                    ? 'btn-secondary'
                                    : 'btn-outline-secondary'
                                    }`}
                            >
                                {btn}
                            </button>
                        ))}
                    </section>

                    {/* Products */}
                    <section>
                        <table
                            className="table table-hover offset-1 mt-5"
                            style={{ width: "80%" }}
                        >
                            <thead className='table-dark'>
                                <tr>
                                    <th className='fs-5'>Title</th>
                                    <th className='fs-5'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredService.length > 0 ? (
                                    filteredService.map(item => (
                                        <tr key={item.uniqueId}>
                                            <td>
                                                <a href={item.url} className='text-decoration-none text-success' target="_blank" rel="noreferrer">
                                                    {item.name}
                                                </a>
                                            </td>
                                            <td>{item.description}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={2} className='text-center text-danger'>No services found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    );
}
