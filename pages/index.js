import React, {Component} from 'react'
import Head from 'next/head'

export default class Index extends Component {

    render() {
        return (
            <div id="App">
                <Head>
                    <title>Frontend Mentor | static-job-listings</title>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png"/>

                </Head>
                <main id="main-content">
                    <header className="header">
                        <div className="header__head"></div>

                        <ul className="header__list">
                            <ul className="header__filter">
                                <div className="filters">
                                    <p className="filter-category">Frontend
                                        <button className="delete-category">
                                            <span>&times;</span>
                                        </button>
                                    </p>
                                </div>
                                <button className="clear">Clear</button>
                            </ul>
                        </ul>
                        <ul className="joblist">
                            <li className="jobpost">
                                <img src="/static/images/photosnap.svg" alt="job photo" className="jobpost__img"/>
                                <div className="jobpost__details">
                                    <div className="jobpost__status">
                                        <h3 className="jobpost__company">Photosnap</h3>
                                        <span className="new">NEW</span>
                                        <span className="featured">FEATURED</span>
                                    </div>
                                    <h2 className="jobpost__role">Senior Frontend Developer</h2>
                                    <div className="jobpost__date">
                                        <span className="jobpost__time">1d ago</span>
                                        <div className="dot"></div>
                                        <span className="jobpost__time">Full Time</span>
                                        <div className="dot"></div>
                                        <span className="jobpost__time">USA Only</span>
                                    </div>
                                </div>

                                <div className="jobpost__categories">
                                    <button className="category-btn">Frontend</button>
                                    <button className="category-btn">Senior</button>
                                    <button className="category-btn">HTML</button>
                                    <button className="category-btn">CSS</button>
                                    <button className="category-btn">Javascript</button>
                                </div>
                            </li>
                        </ul>


                    </header>
                </main>
            </div>
        )
    }
}
