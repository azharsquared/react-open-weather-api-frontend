import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

type Repository = {
    id: number;
    full_name: string;
    html_url: string;
};
function Repositories(props: any) {

    useEffect(() => {getRepositories()}, [props.keyWord]);

    const getRepositories = async () => {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${props.keyWord}`);
        return response.data.items;
    }
    const queryResult = useQuery({
        queryKey: ['repositories'],
        queryFn: getRepositories,
    });

    const isLoading = queryResult.isLoading;
    const isError = queryResult.isError;
    const data = queryResult.data;
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>Error...</p>
    }
    else {
        return (
            <table>
                <tbody>
                    {
                        data.map((repo: Repository) =>
                            <tr key={repo.id}>
                                <td>{repo.full_name}</td>
                                <td>
                                    <a href={repo.html_url}>{repo.html_url}</a>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        )
    }
}
export default Repositories;