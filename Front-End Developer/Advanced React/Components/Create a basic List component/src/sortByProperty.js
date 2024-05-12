const sortByProperty = (data, property) => {
    return data.sort((a, b) => a[property] - b[property])
};

export default sortByProperty;