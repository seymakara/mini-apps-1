// import React from "react"; // import React from "react"; // because I have script tags in my index.html
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'HOME',
            userInfo: {
                username: 'seyma',
                email: 'akin',
                password: 'test',
                address: 'test',
                city: 'sf',
                state: 'ca',
                zip: 'test',
                phone: 'test',
                cardnumber: 'test',
                expriration: 'test',
                cvv: 'test',
                billzip: 'test'
            }
        };
        this.setPage = this.setPage.bind(this);
        this.setUserInfo = this.setUserInfo.bind(this)
        this.dataSubmit = this.dataSubmit.bind(this)
    }


    render() {
        if (this.state.page === 'HOME') {
            return <HomePage nextPage={this.setPage} />
        }
        if (this.state.page === 'F1') {
            return <UserInfo nextPage={this.setPage} updateUserInfo={this.setUserInfo} />
        }
        if (this.state.page === 'F2') {
            return <ContactInfo nextPage={this.setPage} updateUserInfo={this.setUserInfo} />
        }
        if (this.state.page === 'F3') {
            return <PaymentInfo nextPage={this.setPage} updateUserInfo={this.setUserInfo} />
        }
        if (this.state.page === 'F4') {
            return <Summary nextPage={this.setPage} updateUserInfo={this.setUserInfo} />
        }
    }
    setPage(pageName) {
        if (pageName === 'F4') {
            this.setState(
                { page: pageName }
            )
            this.dataSubmit()
        } else {
            this.setState(
                { page: pageName }
            )
        }
    };

    setUserInfo(event) {
        event.preventDefault;
        let newUserInfo = this.state.userInfo
        newUserInfo[event.target.name] = event.target.value
        this.setState({
            userInfo: newUserInfo
        });
        console.log(this.state)

    };
    dataSubmit(successCB, errorCB) {
        event.preventDefault;
        $.ajax({
            url: '/submit',
            method: 'POST',
            data: this.state.userInfo,
            dataType: 'json',
            success: successCB || console.log('Data successfully sent!'),
            error: errorCB || console.log('uhoh')
        })
    }
};



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
            <form>
                <fieldset>
                    User Name: <br />
                    <input type="text" name="username" id="username" onChange={() => { props.updateUserInfo(event) }} /><br />
                    Email: <br />
                    <input type="email" name="email" id="email" onChange={() => { props.updateUserInfo(event) }} /><br />
                    Password: <br />
                    <input type="password" name="password" id="password" onChange={() => { props.updateUserInfo(event) }} /><br />
                    <button onClick={() => { props.nextPage('F2') }} >Next</button>
                </fieldset>
            </form>
        </div>
    )
}

let ContactInfo = (props) => {
    return (
        <div>
            <h1>Contact Details</h1>
            <form >
                <fieldset>
                    Adress: <br />
                    <input type="text" name="address" id="address" onChange={() => { props.updateUserInfo(event) }} /> <br /><br />
                    City: <br />
                    <input type="text" name="city" id="city" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    State: <br />
                    <input type="text" name="state" id="state" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    Zipcode: <br />
                    <input type="number" name="zip" id="zip" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    Phone: <br />
                    <input type="number" name="phone" id="phone" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    <button onClick={() => { props.nextPage('F3') }} >Next</button>
                </fieldset>
            </form>
        </div>
    )
}

let PaymentInfo = (props) => {
    return (
        <div>
            <h1>Payment Details</h1>
            <form >
                <fieldset>
                    Credit Card Number: <br />
                    <input type="number" name="cardnumber" id="cardnumber" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    Expiration Date: <br />
                    <input type="date" name="expriration" id="expriration" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    CVV: <br />
                    <input type="number" name="cvv" id="cvv" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    Billing Zipcode: <br />
                    <input type="number" name="billzip" id="billzip" onChange={() => { props.updateUserInfo(event) }} /><br /><br />
                    <button onClick={() => { props.nextPage('F4') }} type="submit">Submit</button>
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
            <button onClick={() => { props.nextPage('HOME') }} >Purchase</button>
        </div>
    )
}

// because we are rendering at the same place no need to export.
// export default App; 
ReactDOM.render(<App />, document.getElementById("root"));

