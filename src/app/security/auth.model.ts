export class AuthModel {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public role: string) { }
}
