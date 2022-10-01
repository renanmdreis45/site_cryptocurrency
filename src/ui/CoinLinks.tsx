import {Button} from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLink, faCode, faComment} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


interface coinData {
    name: string;
    sourceCode: string;
    chat: string;
    twitter: string;
    announcement: string;
    site: string;
}

interface Props {
  coinData: coinData;
}

export const CoinLinks: React.FC<Props> = ({coinData}) => {
    return (
        <div className="w-full gap-1 flex flex-wrap mt-4 items-center justify-center">
            {coinData.site && (
                <Button href={coinData.site}>
                    <>
                        <FontAwesomeIcon className="mr-1" icon={faLink} />
                        {coinData.name.toLowerCase()}.com
                    </>
                </Button>
            )}
            {coinData.sourceCode && (
                <Button href={coinData.sourceCode}>
                    <>
                        <FontAwesomeIcon className="mr-1" icon={faCode} />
                        Source code
                    </>
                </Button>
            )}
            {coinData.chat && (
                <Button href={coinData.chat}>
                    <>
                        <FontAwesomeIcon className="mr-1" icon={faComment} />
                        Chat                   
                    </>
                </Button>
            )}
            {coinData.twitter && (
                <Button href={`http://twitter.com/${coinData.twitter}`}>
                    <>
                        <FontAwesomeIcon className="mr-1" icon={faTwitter as IconProp} />@
                        {coinData.twitter}
                    </>
                </Button>
            )}            
        </div>
    )
}
