import React from 'react'
import home_promo from '../images/Home/promo_logo_watch_series_6_lte__el1kwqt2v52e_large_2x.png'
import home_promo1 from '../images/Home/logo__dcojfwkzna2q_medium_2x (2).png'
import home_promo2 from '../images/Home/logo_light__cfvl40z2nzau_medium_2x.png'

function Main() {
	return (
		<div>
			{/* <!--  Alert section start here --> */}
			<section className="alert-section top-50">
				<div className="container">
					<div className="alert-title">
						<a href="/us/shop/goto/shop" target="_self" data-analytics-title="shop online - control">Shop online</a> and get
						Specialist help, free no-contact delivery, and more.
					</div>
				</div>
			</section>
			{/* <!--  Alert section end here --> */}

			{/* <!-- First section starts here --> */}
			<section className="first-hightlight-wrapper">
				<div className="container">

					<div className="title-wraper bold black">
						Buy a Mac or iPad for college. Get AirPods.<sup>1</sup>
					</div>

					<div className="links-wrapper">
						<ul>
							<li><a href="">Save with education pricing</a></li>
						</ul>
					</div>
				</div>
			</section>
			{/* <!-- First section end here --> */}

			{/* <!-- Second section starts here --> */}
			<section className="second-hightlight-wrapper">
				<div className="container">
					<div className="title-wraper bold black">
						iPhone 12
					</div>
					<div className="new-alert">
						<h3></h3>
					</div>
					<div className="description-wrapper black">
						Blast past fast.
					</div>
					<div className="price-wrapper grey">
						<p>From $29.12/mo. for 24 mo. or $699 before trade-in<sup>1</sup></p>
						<p>Buy directly from Apple with special carrier offers</p>
					</div>

					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</section>
			{/* <!-- Second section starts here --> */}

			{/* <!-- Third section starts here --> */}
			<section className="third-hightlight-wrapper">
				<div className="container">
					<div className="title-wraper bold">
						iPhone 12 Pro
					</div>
					<div className="description-wrapper">
						It's a leap year.
					</div>

					<div className="price-wrapper grey">
						<p>From $41.62/mo. for 24 mo. or $999 before trade-in<sup>3</sup></p>
						<p>Buy directly from Apple with special carrier offers</p>
					</div>

					<div className="links-wrapper ccc">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</section>
			{/* <!-- Third section ends here --> */}

			<section className="extra-hightlight-wrapper">
				<div className="container">
					<div className="title-wraper bold">
						iPad Pro
					</div>

					<div className="description-wrapper ccc">
						Supercharged by the Apple M1 chip.
					</div>
					<div className="links-wrapper ccc">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</section>
			{/* <!-- extra section ends here --> */}


			{/* <!-- Fourth section starts here --> */}
			<section className="fourth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="title-wraper">
									iMac
								</div>

								<div className="price-wrapper">
									Say hello.
								</div>

								<div className="links-wrapper">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Apply now</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="title-wraper bold">
									iPad Pro
								</div>

								<div className="description-wrapper">
									Supercharged by the Apple M1 chip.
								</div>
								<div className="links-wrapper ccc">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Fourth section ends here --> */}

			{/* <!-- Fifth section starts here --> */}
			<section className="fifth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={home_promo} />
									</div>
								</div>
								<div className="description-wraper white">
									The future of health is on your wrist.
								</div>
								<div className="links-wrapper ccc">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul>
								</div>

							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="description-wrapper black">
									<h2>Today at Apple</h2>
									<h1>Virtual Sessions</h1>
									<div></div>
									<h5>Learn the basics of using</h5>
									<h5>iPhone, iPad, and Mac live</h5>
									<h5>with Apple Creatives.</h5>
								</div>

								<div className="links-wrapper">
									<div>
										<ul>
											<li>
												<a href="">Sign up</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Fifth section ends here --> */}

			{/* <!-- Sixth section starts here --> */}
			<section className="sixth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={home_promo1} />
									</div>
								</div>
								<div className="description-wraper white">
									Introducing Spatial Audio with Dolby Atmos.
								</div>
								<div className="try">
									<ul>
										<li><a href="">Listen now<sup>4</sup></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper hhh">
										<img src={home_promo2} />
									</div>
								</div>
								<div className="description-wraper white">
									<h2> <i>TED LASSO</i> </h2>
								</div>
								<div className="watch-more-wrapper">
									<a href="">Watch Season 2 trailer</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Main
