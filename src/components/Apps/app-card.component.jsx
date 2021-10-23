import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import botIcon from './bot-icon.png';
import './apps.style.css';

class AppCardComponent extends Component {

    checkIfUserIsAuthenticatedBeforeRedirect() {
        switch (this.props.auth){
            case null:
                return;
            case false:
                return (
                    <a className="f4 link dim br3 ba bw1 ph3 pv2 mb2 dib" href="/api/v1/auth/google">Create something similar</a>
                )
            default:
                return (
                    <Link
                        to={'/myapps?' + this.props.id}
                        className="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-blue"
                    >
                        Create something similar
                    </Link>
                )
        }
    }

    render() {
        return (
            <div className='tc wg-150 hover-bg-light-green dib br3 pa5 ma2 grow bw2 shadow-6'>
                <a href={this.props.repo_url} className="db dark-gray link dim">
                    <img src={botIcon} className="db center br2 w-25 br--top"
                         alt={this.props.name}/>
                    <div>
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.description}</h3>
                    </div>
                </a>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(AppCardComponent);