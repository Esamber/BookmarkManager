import React from 'react';

const TopUrlTable = ({ urls }) => {

    return (
        <div>
            <table className="table table-hover table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Url</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {urls && urls.map(u => {
                        return (
                            <tr key={ u.id}>
                                <td>
                                    <a href={u.urlText} target="_blank">{u.urlText}</a>
                                </td>
                                <td>{u.count}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TopUrlTable;