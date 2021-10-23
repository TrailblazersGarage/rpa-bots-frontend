import React, { Component } from 'react';
import HeaderComponent from "../../components/Header/header-component";

class Profile extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />

                <div className="box-centralized">
                    <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div className="tc">
                            <img src="http://tachyons.io/img/avatar_1.jpg" alt="profileImg" className="br-100 h4 w4 dib ba b--black-05 pa2"
                                 title="Photo of a kitty staring at you" />
                                <h1 className="f3 mb2">JVO</h1>
                                <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Profile;