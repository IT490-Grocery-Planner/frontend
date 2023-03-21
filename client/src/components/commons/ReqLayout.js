import React from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'

export default function ReqLayout(props) {
    const { loading, children } = props
    return (
        <>
            {loading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}

            {children}

        </>
    )
}