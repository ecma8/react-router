import React, {Component} from 'react';
import menuList from '../static/json/menu.json';
import {Link} from 'react-router';
import Pagination from '../components/public/page'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: menuList.menuList[0].list,
            currentPage: 1,
            allPage: 30
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    };

    show = () => {
        this.context.store.dispatch({type: 'showLoading'})
        setTimeout(() => {
            this.context.store.dispatch({type: 'hideLoading'})
        }, 3000)
    };
    hide = () => {
        this.context.store.dispatch({type: 'hideLoading'})
    };
    GoPath = () => {
        console.log(this);
        this.context.router.push('/live')
    };
    pageIndex = (curPage) => {
        this.setState({currentPage: curPage})
    };
    render() {
        let item = this.state.json.map((item, index) => {
            return (
                <li key={index}>
                    <h5>
                        <span>{item.title}</span>
                    </h5>
                    <dl>
                        {
                            item.list.map((items, index) => {
                                return (
                                    <dd key={index}>
                                        <Link to={'/index/' + items.path}
                                              activeClassName="slide-bar-color">{items.name}</Link>
                                    </dd>
                                )
                            })
                        }
                    </dl>
                </li>
            );
        });
        return (
            <div className='content'>
                <ul className='content-left-nav'>
                    {item}
                </ul>
                <div className="content-right">
                    <button onClick={this.show}>show</button>
                    <button onClick={this.hide}>hide</button>
                    <button onClick={this.GoPath}>GoPath</button>
                    <Pagination
                        totalPages={this.state.allPage}
                        currentPage={this.state.currentPage}
                        onChange={this.pageIndex}
                    />
                    <Link to={{pathname: "/cloud/more", query: {message: "123"}}}>lining</Link>
                    {this.props.children || <span>No Content</span>}
                </div>
            </div>
        );
    }
}

Index.contextTypes = {
    store: React.PropTypes.object,
    router: React.PropTypes.object
};
export default Index;