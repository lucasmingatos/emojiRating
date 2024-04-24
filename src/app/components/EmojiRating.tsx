type Props = { 
    rate: number;
}

export const EmojiRating = ({rate} : Props) => {
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;
    
    //exibir nota e emojis
    const rateInt = Math.floor(rate);

    const stars = '★'.repeat(rateInt) + '✩'.repeat(5 - rateInt);

    return (
        <div className="mt-10 flex items-center text-4xl text-white">
            
            <div>{rate.toFixed(1)}</div>
            <div className="ml-2">{stars}</div>
        </div>
    );
}