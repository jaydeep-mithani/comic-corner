var recom = null;

const setRecommended = (data) => {
    recom = data;
};

const getRecomended = () => recom;

export { setRecommended, getRecomended };
