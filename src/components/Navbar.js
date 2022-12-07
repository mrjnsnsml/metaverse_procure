// import logo from '../assets/logo.png';

const logo = '';
// TO DO: add web3Handler in App.js
const Navbar = ({ web3Handler, account, ToggleKeyboardHandler }) => {
    return (
        <nav className="flex-between">
            <a
                className='flex'
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                Metaverse Procure
            </a>

            {account ? (
                <a
                    href={`${""}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <span>
                    <button onClick={web3Handler} className="button" >Connect Wallet</button>
                    {/* <button onClick={ToggleKeyboardHandler} className="button" >Enable Keyboard</button> */}
                </span>
            )}
        </nav>
    )
}

export default Navbar;
