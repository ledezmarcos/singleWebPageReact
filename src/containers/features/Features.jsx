import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
    },
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    }
]

const Features = () => {
    return (
        <div className='gpt3__features section__padding'  id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>Las posibilidades estan en lo que permite tu imaginacion</h1>
                <p>Pide un acceso beta para comenzar.</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item,index)=>(
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}

            </div>
        </div>
    )
}

export default Features
