import React from "react";
import carts from "../images/icons/cart-sm.png";
import search from "../images/icons/search-icon-sm.png";
import logo from "../images/icons/logo-sm.png";
import '../css/styles.css'


function Header() {
	return (
		<div>
			<div className="nav-wrapper fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm  navbar-expand-md">

						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
							data-target=".navbar-collapse">
							=
						</button>
						<a className="navbar-brand mx-4" href="/"><img src={logo} /></a>

						<a className="navbar-brand mx-4" id="cart" href="#"><img src={carts} /></a>
						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Mac">Mac</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Iphone">iphone</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="Ipad">ipad</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Watch">watch</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Tv">tv</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/NotFound">Music</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/support">Support</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Search/"><img src={search} /></a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/cart"><img src={carts} /></a></li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header
