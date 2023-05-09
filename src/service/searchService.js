export function setCollection(projects, type, subType, optionList) {
    projects.forEach(project => {
        project[`${type}`][`${subType}`].forEach(item => {
            if (!optionList.find(o => o.label.toLowerCase() === item.name.toLowerCase())) {
                optionList.push({value: `${item.name}`, label: `${item.name}`})
            }
        });
    });
    sortOptions(optionList);
}

export function setCollectionInfrastructure(projects, type, optionList) {
    projects.forEach(project => {
        project[`${type}`].forEach(item => {
            if (!optionList.find(o => o.label.toLowerCase() === item.name.toLowerCase())) {
                optionList.push({value: `${item.name}`, label: `${item.name}`})
            }
        });
    });
    sortOptions(optionList)
}

function sortOptions(optionList) {
    optionList.sort((optionOne, optionTwo) => optionOne.value.localeCompare(optionTwo.value))
}

export const style= {
    control: (styles) => ({
        ...styles,
        backgroundColor: '#26272B',
        cursor: "pointer",
        boxShadow: 'none',
        borderColor: "none",
        '&:focus': {boxShadow: 'none', borderColor: "none"},
        '&:blur': {boxShadow: 'none', borderColor: "none"},
        '&:hover': {boxShadow: 'none', borderColor: "none"},
        fontSize: '16px',
        '@media (max-width: 600px)': {
            fontSize: '18px',
        },
    }),
    input: (styles) => ({...styles,
        color: 'white',
        borderColor: "#26272B",
        fontSize: '16px',
        height: "40px",
        '@media (max-width: 600px)': {
            fontSize: '18px',
        },
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        return {
            ...styles,
            height: "40px",
            boxShadow: "none",
            borderBlockColor: "transparent",
            borderBlockEndColor: "transparent",
            fontSize: '16px',
            '@media (max-width: 600px)': {
                fontSize: '18px',
                height: "50px"
            },
            backgroundColor: isFocused
                ? '#ff004f'
                : 'white',
            color: isDisabled
                ? 'white'
                : isSelected
                    ? 'white'
                    : 'black',
            cursor: isDisabled ? 'not-allowed' : 'default'
        };
    },
    multiValue: (styles, { data }) => {
        return {
            ...styles,
            fontSize: '16px',
            '@media (max-width: 600px)': {
                fontSize: '18px',
            },
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        fontSize: '16px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '@media (max-width: 600px)': {
            fontSize: '18px',
        },
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        fontSize: '16px',
        '@media (max-width: 600px)': {
            fontSize: '18px'
        },
    }),
};
