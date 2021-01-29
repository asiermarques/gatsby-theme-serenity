import {URLFactory as URL, isAbsolutePath} from "./dependencies/URL"

const addSlashToEnd = (string) => {
    if(string.slice(-1) !== "/")
        return string + "/";
    return string;
}

export default function useIsCurrentPage(path, gatsbyLocation){
    if(!gatsbyLocation)
        return false;

    if(isAbsolutePath(path))
    {
        let url = URL(path);
        path = url.pathname;
        if(gatsbyLocation.hostname !== url.hostname)
            return false
    }

    return addSlashToEnd(gatsbyLocation.pathname) === addSlashToEnd(path);
}