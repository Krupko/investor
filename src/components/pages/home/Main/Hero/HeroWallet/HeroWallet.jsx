import './HeroWallet.scss'
import wallet from '../../../../../../assets/img/hero/hero-pig/pig2.png'

function HeroWallet() {
	return (
		<div className="hero__wallet">
			<img
				className="hero__wallet-pig"
				loading="lazy"
				src={wallet}
				width="130"
				height="124"
				alt="Wallet"
			/>
		</div>
	)
}

export default HeroWallet;