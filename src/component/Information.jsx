function Header() {

        return(
            <>
                <div className="row">
                    <div className="col-md-8">
                        <h1 className='consolas float-left mt-3'>Jomer P. San Diego Jr.</h1>
                    </div>
                    <div className="col-md-4">
                        <img src="jpsd.jpg"  className="rounded-circle float-right"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr className="line1"></hr>
                    </div>
                </div>
                <div className="row consolas">
                    <div className="col-md-3 i"><i className='fa-solid fa-envelope'></i> <a href="mailto:jomersan0619@gmail.com"> jomersan0619@gmail.com</a></div>
                    <div className="col-md-3 i"><i className='fa-solid fa-phone'></i> +639306805240</div>
                    <div className="col-md-3 i"><i className='fa fa-location-dot'></i> Rodriguez, Rizal</div>
                    <div className="col-md-3 i"><i className='fa-brands fa-github'></i><a href="https://github.com/jpsandiego22"> JPSD</a></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr className="line1"></hr>
                    </div>
                </div>
            </>
        )
    
}
export default Header;