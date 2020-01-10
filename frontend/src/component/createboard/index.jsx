import React from 'react';

import PrimaryBtn from '../utils/primary.button';
import '../../pages/main/dashboard.part/boardlist.item/boardlist.item.css';
import './createboard.css';

const CreateBoard = ({onClick}) => {
	return (
		<div className="window-overlay" >
			<div className="window mod-no-chrome" style={{display: "block"}}>
			    <a className="focus-dummy" href="#">
			    </a>
			    <div className="window-wrapper js-tab-parent" data-elevation="1">
			        <div>
			            <form className="create-board-form">
			                <div className="form-container">
			                    <div className="board-tile create-board-tile has-photo-background" style={{backgroundImage: `url("https://images.unsplash.com/photo-1578558455262-f95f61ac6ef4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9")`}}>
			                        <button className="hide-dialog-trigger unstyled-button" type="button" onClick={onClick}>
			                            <span className="fa fa-times" />
			                        </button>
			                        <div>
			                            <input className="subtle-input" data-test-id="create-board-title-input" placeholder="Add board title" value=""/>
			                        </div>
			                        <div>
			                            <button className="subtle-chooser-trigger unstyled-button vis-chooser-trigger" type="button">
			                                <span className="icon-sm icon-private">
			                                </span>
			                                Private
			                                <span className="icon-sm icon-down subtle-chooser-trigger-dropdown-icon light">
			                                </span>
			                            </button>
			                        </div>
			                    </div>
			                    <ul className="background-grid">
			                        <li className="background-grid-item">
			                            <button className="background-grid-trigger is-photo selected" style={{backgroundImage: `url("https://images.unsplash.com/photo-1578558455262-f95f61ac6ef4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9")`}} type="button">
			                                <span className="icon-sm icon-check">
			                                </span>
			                            </button>
			                        </li>
			                        <li className="background-grid-item">
			                            <button className="background-grid-trigger" style={{backgroundColor: `rgb(0, 121, 191)`}} title="blue" type="button">
			                            </button>
			                        </li>
			                    </ul>
			                </div>
			                <div className="action-items">
			                    <button className="button primary disabled" data-test-id="create-board-submit-button" disabled="" type="submit">
			                        <span className="logo-loading subtle">
			                        </span>
			                        <span>
			                            Create Board
			                        </span>
			                    </button>
			                    <a className="start-with-a-template" href="/templates">
			                        <span className="icon icon-md icon-template-board light">
			                        </span>
			                        <span>
			                            Start with a Template
			                        </span>
			                    </a>
			                </div>
			            </form>
			        </div>
			    </div>
			</div>
		</div>
	)
}

export default CreateBoard;