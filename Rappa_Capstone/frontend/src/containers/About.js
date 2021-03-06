import React, {useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ftpierce from '../assets/images/ftpierce.jpeg';
import Footer from '../components/Footer/Footer';

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getTopSeller = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/realtors/topseller`, config);
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };

        getTopSeller();
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getRealtors = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/realtors/`, config);
                setRealtors(res.data);
            }
            catch (err) {

            }
        };

        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            );
        }

        return results;
    };  

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Broker/Owner:</h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });

        return result;
    };
    

    return (
        <main className='about'>
            <Helmet>
                <title>Rappa Realty Group- About</title>
                <meta
                    name='description'
                    content='Rappa Realty Group - About us'
                />
            </Helmet>
            <header className='about__header'>
                <h1 className='about__heading'>Meet Team Rappa</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2 className='about__subheading'>What can Rappa sell for you?!</h2>
                        <p className='about__paragraph'>
                            Rappa Realty Group was created and founded by Keith A. Rappa in 2017. Rappa Realty Group focuses on building relationships with the community. We proudly serve the beautiful Treasure Coast.
                        </p>    
                        <div className='about__display'>
                            <img className='about__display__image' src={ftpierce} alt='' />
                        </div>
                        <p className='about__paragraph'>
                          Beautiful Downtown Fort Pierce, Florida
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Rappas Realtors!</h2>
                </div>
                {getAllRealtors()}
            </section>
            <Footer />
        </main>
        
    );
};
 <button className='auth__form__button'>Register with Rappa!</button>
export default About;


{/* <button href="sms:1-772-528-3553">Text Keith Rappa</button> 

<br></br>
<a href="sms:1-772-359-0255">Text Sebastian!</a>
<br></br>
<a href="sms:1-772-216-8601">Text Brennan!</a>
</section> */}