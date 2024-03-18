

const Link = ({route}) => {
    return (
        
            <li className="hover:bg-white"
                ><a href={route.path}></a>{route.name}</li>
    
    );
};

export default Link;