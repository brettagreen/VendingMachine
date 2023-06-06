import vendingPic from './imgs/vending-machine.jpg';

function Home() {
    return(
        <>
            <h3>click a link to select your poison!</h3>
            <img className="vendingMachine" src={vendingPic} alt="vending machine pic" />
        </>
    )
}

export default Home;