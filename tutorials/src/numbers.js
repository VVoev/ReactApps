class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [10, 20, 30, 40, 50]
        }
        this.handleAddNumber = this.handleAddNumber.bind(this);
        this.handleDeleteNumber = this.handleDeleteNumber.bind(this);
        this.handleEditNumber = this.handleEditNumber.bind(this);
    }

    givenewInput(){

        return <div>
            <h1>tva e</h1>
        </div>
    }

    handleEditNumber(event){
        const number = parseInt(event.target.id);
        this.deleteNumbers(number);
        this.givenewInput();

    }

    deleteNumbers(number){
        const prevArray = this.state.numbers.slice();
        let newNumbers = prevArray.filter((value) => value !== number);
        this.setState({numbers: newNumbers})
    }

    handleDeleteNumber(event) {
        const number = parseInt(document.getElementById('deletenumber').value);
        this.deleteNumbers(number);
        event.preventDefault();
    }

    handleAddNumber(event) {
        const number = document.getElementById('addnumber').value;
        const prevArray = this.state.numbers.slice();
        prevArray.push(number);
        this.setState({numbers: prevArray})
        event.preventDefault();
    }

    render() {
        const numbers = this.state.numbers;
        return (
            <div>
                <ListNumbers numbers={numbers}
                             addNumber={this.handleAddNumber}
                             deleteNumber={this.handleDeleteNumber}
                             editNumber={this.handleEditNumber}
                />
            </div>
        )
    }
}

class ListNumbers extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddNumber = this.handleAddNumber.bind(this);
        this.handleDeleteNumber = this.handleDeleteNumber.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleAddNumber(e) {
        this.props.addNumber(e);
    }

    handleDeleteNumber(e) {
        this.props.deleteNumber(e);
    }

    handleEdit(e){
        this.props.editNumber(e);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.numbers.map((number) =>
                        <li key={number} id={number} className="numbers" onClick={this.handleEdit}>{number} <span id={number} className="numbers">edit</span>
                        </li>
                    )}
                </ul>
                <button onClick={this.handleAddNumber}>Add Number</button>
                <input type="text" id="addnumber"/>
                <button onClick={this.handleDeleteNumber}>Delete Number</button>
                <input type="text" id="deletenumber"/>
            </div>
        )
    }
}


ReactDOM.render(<Numbers/>, document.getElementById('root'));