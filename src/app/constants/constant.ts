export class Config {
    public static apiUrl(): string {
        return `https://jsonplaceholder.typicode.com/users`;
    }
}
export class Posts {
    public static apiUrl(): string {
        return `https://jsonplaceholder.typicode.com/posts`;
    }
}
export const Users = [
    {
        id: '',
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    }
];

export const posts = [
    {userId: ''},
    {id: ''},
    {title: ''},
    {body: ''}
];
