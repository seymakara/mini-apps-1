// import React from "react"; // import React from "react"; // because I have script tags in my index.html
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'HOME'
        }
        this.setPage = this.setPage.bind(this)
    }


    render() {
        if (this.state.page === 'HOME') {
            return <HomePage nextPage={this.setPage} />
        }
        if (this.state.page === 'F1') {
            return <UserInfo nextPage={this.setPage} />
        }
        if (this.state.page === 'F2') {
            return <PaymentInfo nextPage={this.setPage} />
        }
        if (this.state.page === 'F3') {
            return <Summary nextPage={this.setPage} />
        }
    }

    setPage(pageName) {
        this.setState(
            { page: pageName }
        )
    }
}


let HomePage = (props) => {
    return (
        <div>
            <h1>Homepage</h1>
            {/* function inside onClick should be anonymous function definitions because interpreter directly implement them without waiting for the click. */}
            <button onClick={() => { props.nextPage('F1') }}>Checkout </button>
        </div>
    )
}
let UserInfo = (props) => {
    return (
        <div>
            <h1>User Information</h1>
            <form action="/userInfo" method="post">
                <fieldset>
                    User Name: <br />
                    <input type="text" name="username" id="username" /><br />
                    Email: <br />
                    <input type="email" name="email" id="email" /><br />
                    Password: <br />
                    <input type="password" name="password" id="password" /><br />
                    <button onClick={() => { props.nextPage('F2') }} type="submit">Next</button>
                </fieldset>
            </form>
        </div>
    )
}

let PaymentInfo = (props) => {
    return (
        <div>
            <h1>Payment Details</h1>
            <form action="/paymentInfo" method="post">
                <fieldset>
                    Credit Card Number: <br />
                    <input type="number" name="creditcardNumber" id="creditcardNumber" /><br /><br />
                    Expiration Date: <br />
                    <input type="date" name="exprirationDate" id="exprirationDate" /><br /><br />
                    CVV: <br />
                    <input type="number" name="cvv" id="cvv" /><br /><br />
                    Billing Zipcode: <br />
                    <input type="number" name="zipcode" id="zipcode" /><br /><br />
                    <button onClick={() => { props.nextPage('F3') }} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

let Summary = (props) => {
    return (
        <div>
            <div>
                <h3>User Info Details</h3>
            </div>
            <div>
                <h3>Contact Details</h3>
            </div>
            <div>
                <h3>User Info Details</h3>
            </div>
            <button onClick={() => { props.nextPage('HOME') }}>Next</button>
        </div>
    )
}

// because we are rendering at the same place no need to export.
// export default App; 
ReactDOM.render(<App />, document.getElementById("root"));

