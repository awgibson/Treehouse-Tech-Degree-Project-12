import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
			<div className="row bg-info py-2">
				<div className="col-sm">
					<form className="text-center">
						<input
							className="form-control form-control-lg w-75 d-inline"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					</form>
				</div>
			</div>
		);
	}
}
