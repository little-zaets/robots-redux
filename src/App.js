import React from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchField';
import { fetchRobots } from './redux/actions';
import './App.css';
import { setSearchField } from './redux/actions';

class App extends React.Component {

	componentDidMount(props) {
		console.log(props)
		this.props.loadRobots();
	}
	handleChange = (e) => {
		// const { searchField } = this.state;
		this.setState({ searchField: e.target.value })
		// this.inputText = e.target.value;
	}
	render() {
		//   const { robots, searchField } = this.state;
		const { searchField, robots, isLoading } = this.props;
		console.log(searchField);
		const filterRobots = robots.filter(item => {
			return item.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isLoading ?
			<h1 style={{textAlign: 'center'}}>Loading...</h1> :
			(
				<div className="tc">
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox onInputChange={this.handleChange} />
					<CardList robots={filterRobots} />
				</div>
			)
		}
	}
	const mapStateToProps = (state) => {
		return {
			searchField: state.searchRobots.searchField,
			robots: state.requestRobots.robots,
			isLoading: state.requestRobots.isLoading,
			error: state.requestRobots.error
		}
	}
	const mapDispatchToProps = (dispatch) => {
		return {
			onInputChange: (e) => dispatch(setSearchField(e.target.value)),
			loadRobots: () => dispatch(fetchRobots())
		}
	}
export default connect(mapStateToProps, mapDispatchToProps)(App);
