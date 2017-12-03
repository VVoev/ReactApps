class Ceo extends React.Component{

    constructor(props){
        super();
        this.state={
            managers:['Ivan','Georgi']
        }
        this.addManager = this.addManager.bind(this);
    }

    addManager(event){
        const manager = document.getElementById('details').value.toString();
        const prevArray= this.state.managers.slice();
        prevArray.push(manager);
        this.setState({managers:prevArray})
        event.preventDefault();
    }
    render(){
        const numberOfManagers = this.state.managers.length;
        const allManagers=this.state.managers;
        return(
            <h1>I am the Ceo
                <hr/>
                <Manager onAddNewManager={this.addManager} numberOfManagers={numberOfManagers}/>
                <ListManagers allManagers={allManagers}/>
            </h1>
        )
    }
}

class Manager extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            employees:['Asencho','Rashko','Munio']
        }
        this.addWorker = this.addWorker.bind(this);
    }


    handleChange(e){
        this.props.onAddNewManager(e)
    }

    addWorker(event){
        const workerName = document.getElementById('detailsEmployee').value;
        let copy = this.state.employees.slice();
        copy.push(workerName);
        this.setState({employees:copy})
        event.preventDefault();
    }




    render(){
        const managers = this.props.numberOfManagers;
        const workers = this.state.employees;
        return(
            <div>
                <form action="submit" onSubmit={this.handleChange}>
                    <div>Please enter your manager name</div>
                    <input type="text" id="details"/>
                    <button>Add Managers</button>
                </form>
                <p>Number Of Managers in the company:{managers}</p>
                <Workers onAddNewWorker={this.addWorker}/>
                <ListWorkers workers={workers}/>
            </div>
        )
    }
}

class Workers extends React.Component{
    constructor(props){
        super(props);
        this.handleWorkerChange=this.handleWorkerChange.bind(this);
    }

    handleWorkerChange(e){
        this.props.onAddNewWorker(e);
    }

    render(){

        return(
            <div>
                <form action="submit" onSubmit={this.handleWorkerChange}>
                    <div>Please enter your employee name</div>
                    <input type="text" id="detailsEmployee"/>
                    <button>Add Employee</button>
                </form>
            </div>
        )
    }
}
function ListWorkers(props) {
    const workers = props.workers;
    return(
        <div>
            <br/>
            <ul>
                {workers.map((worker,index)=>
                    <li key={index}>{worker} with position worker</li>
                )}
            </ul>
        </div>
    )
}
function ListManagers(props) {
    const managers = props.allManagers;
    return(
        <div>
            <br/>
            <ul>
                {managers.map((manager,index)=>
                    <li key={index}>{manager} with position manager</li>
                )}
            </ul>
        </div>
    )
}



ReactDOM.render(<Ceo/>, document.getElementById('root'));