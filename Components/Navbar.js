import Link from 'next/link';
import React from 'react'
import Image from "next/image";
import Logo from '../styles/images/Brand.PNG'

const Navbar = () => {
  return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-dark "
				style={{ backgroundColor: "#54B43550" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand">
						<Image src={Logo} alt="" width={40} height={40} />
						<a style={{marginLeft:"3rem"} }className="font-bold">
							<Link href="/">Majid Farms & Fruit Suppliers</Link>
						</a>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className=" navbar-collapse navbar-design2 justify-content-center"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav  ">
							<li className="nav-item">
								<a className="nav-link active">
									<Link aria-current="page" href="/">
										Home
									</Link>
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link active">
									<Link href="/Services">Products</Link>
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link active">
									<Link href="/About">About</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active">
									<Link href="/Contact">Contact</Link>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar
