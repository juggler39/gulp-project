export default () => {
    console.log('entry');
    const a = {
        a: 1,
        b: 2,
    };
    const b = {
        ...a,
        c: 7,
    };
    console.log(b);
};
