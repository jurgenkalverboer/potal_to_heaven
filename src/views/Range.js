


export function Range({range}) {

    //let r = range.range;

    return (

        <div class="range">

            {range === "full" && <>xxxxx<br/>xxxxx<br/>xxxxx<br/> xxx <br/>  ^  </>}
            {range === "medium" && <>xxxxx<br/> xxx <br/>  ^  </>}
            {range === "areaMedium" && <>xxx<br/>xxx<br/> ^ </>}
            {range === "short" && <>xxx<br/> ^ </>}
            {range === "face" && <>x<br/>^</>}
            {range === "column" && <>x<br/>x<br/>x<br/>^</>}
            {range === "shortAround" && <>xxx<br/>x^x<br/>xxx</>}
            {range === "longAround" && <>xxxxx<br/>xxxxx<br/>xx^xx<br/>xxxxx<br/>xxxxx</>}
        </div>
    );
}