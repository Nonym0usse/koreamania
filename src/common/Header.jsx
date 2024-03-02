import { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">Koreamania</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
                <details>
                <summary>
                    Parent
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a href="/about">Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
    );
  }
}