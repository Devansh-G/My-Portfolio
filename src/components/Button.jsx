import React from 'react'

const Button = ({text, className, id}) => {
    return (
        <a
            onClick={(e) => {
                e.preventDefault();     //Prevent default behaviour of reloading the website on click
                const target = document.getElementById("counter");
                /* Since, only our Hero section will be using id and not the contacts section. So we want to scroll to
                    the below section only when the Hero section button is clicked. So, only when target and id both
                    are present only then scroll*/
                if(target && id){
                    const offset = window.innerHeight * 0.15;

                    const top = target.getBoundingClientRect().top + window.scrollY - offset;

                    window.scrollTo({top, behavior: 'smooth'});
                }

            }}
            className={`${className ?? ""} cta-wrapper`} >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    )
}
export default Button
