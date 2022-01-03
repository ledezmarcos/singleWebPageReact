import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='inicio'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Construye cosas asombrosas con Inteligencia Artificial OpenAI</h1>
                <p>La inteligencia automatizada y artificial dentro de los negocios se ha vuelto un punto imprescindible para potencias los objetivos a cortos, medianos y largos plazos. Cuenta con nosotros para ello.</p>
                <div className='gpt3__header-content__input'>
                    <input type='email' placeholder='Ingrese su correo'/>
                    <button type='button' >Inicia</button>
                </div>
                <div className='gpt3__header-content__people'>
                    <img src={people} alt='personas'/>
                    <p>Más de 80 personas han confiado en la inclusión IA.</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai}/>
            </div>
        </div>
    )
}

export default Header
