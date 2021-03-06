import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        comments: PropTypes.array,
        toggleOpen: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        comments: [],
    };

    render() {
        const { toggleOpen, articleId } = this.props;

        return (
            <div>
                <button type = "button" onClick = {toggleOpen}>
                    {this.getCommentsButtonLabel()}
                </button>
                {this.getBody()}
                <CommentForm articleId = {articleId} />
            </div>
        );
    }

    getBody() {
        const { comments, isOpen } = this.props;

        if (!isOpen || !comments.length) {
            return null;
        }

        const commentElements = comments.map(id => (
            <li key = {id}>
                <Comment id = {id} />
            </li>
        ));

        return <ul>{commentElements}</ul>;
    }

    getCommentsButtonLabel() {
        const { comments, isOpen } = this.props;

        if (!comments.length) {
            return 'no comments yet';
        }

        const label = isOpen ? 'hide comments' : 'show comments';
        return label;
    }
}

export default toggleOpen(CommentList);
