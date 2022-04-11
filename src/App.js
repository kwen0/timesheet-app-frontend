import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      DataisLoaded: false,
      search: ''
      // date: '',
      // project: '',
      // client: '',
      // hours: '',
      // billable: '',
      // rate: ''
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }

  // handleDateChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     date: e.target.value
  //   })
  // }

  // handleProjectChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     project: e.target.value
  //   })
  // }

  // handleClientChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     client: e.target.value
  //   })
  // }

  // handleHoursChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     hours: e.target.value
  //   })
  // }

  // handleBillableChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     billable: e.target.value
  //   })
  // }

  // handleRateChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     rate: e.target.value
  //   })
  // }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    let client = this.state.search.charAt(0).toUpperCase() + this.state.search.slice(1);
    fetch(`http://localhost:8990/timesheets/${client}`)
      .then((res) => {
        if (res.status == 200) {
          return res.json()
        } else {
          throw Error(res.statusText)
        }
      })
      .then((json) => {
        this.setState({
          data: json,
          DataisLoaded: true
        })
      })
  }

  // handleCreateEntry = (e) => {
  //   e.preventDefault();
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ Date: this.state.date, Client: this.state.client, Project: this.state.project, Hours: this.state.hours, Billable: this.state.billable, BillableRate: this.state.rate })
  //   }
  //   fetch("http://localhost:8990/timesheets", requestOptions)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         data: json,
  //         DataisLoaded: true
  //       })
  //     })
  // }

  componentDidMount() {
    fetch("http://localhost:8990/timesheets")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
          DataisLoaded: true
        })
      })
  }

  render() {
    const { DataisLoaded, data } = this.state;
    if (!DataisLoaded) return <div>
      <h2>Loading... </h2> </div>;

    return (
      <div className="App">
        <form onSubmit={this.handleSearchSubmit}>
          <input type="text"
            placeholder="Search client"
            value={this.search}
            onChange={this.handleSearchChange}
          />
        </form>
        {/* <form className="CreateEntry" onSubmit={this.handleCreateEntry}>
          <input type="text"
            placeholder="Date"
            value={this.date}
            onChange={this.handleDateChange}
          />
          <input type="text"
            placeholder="Project"
            value={this.project}
            onChange={this.handleProjectChange}
          />
          <input type="text"
            placeholder="Client"
            value={this.client}
            onChange={this.handleClientChange}
          />
          <input type="text"
            placeholder="Hours"
            value={this.hours}
            onChange={this.handleHoursChange}
          />
          <input type="text"
            placeholder="Billable?"
            value={this.billable}
            onChange={this.handleBillableChange}
          />
          <input type="text"
            placeholder="Billable Rate"
            value={this.rate}
            onChange={this.handleRateChange}
          />
          <button>Add entry</button>
        </form> */}
        <table>
          <th>Date</th>
          <th>Project</th>
          <th>Client</th>
          <th>Hours</th>
          <th>Billable?</th>
          <th>Billable Rate</th>
          {
            data.map((data) => (
              <tbody key={data._id}>
                <tr>
                  <td>{data.Date}</td>
                  <td>{data.Project}</td>
                  <td>{data.Client}</td>
                  <td>{data.Hours}</td>
                  <td>{data.Billable}</td>
                  <td>{data.BillableRate}</td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    )
  }
}

export default App;
