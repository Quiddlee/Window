const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data
    });
    const errorMessage = `Could not fetch ${url}, status: ${res.status}`;
    if (!res.ok) throw new Error(errorMessage);


    return await res.text();
};


export {postData};