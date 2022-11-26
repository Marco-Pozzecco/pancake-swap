import { Button } from "../buttons/Button";
import { PerpetualItem } from "../container/PerpetualItem";
import { BiCaretDown } from "react-icons/bi"
import { BiSliderAlt } from "react-icons/bi"

export function FinancialGraph () {


    return (
        <PerpetualItem>
            <div className="graph-bar">
                <div className="graph-settings">
                    <Button type="noBorderButton" text="Time" style={{margin: 0 + "px"}}/>
                    <Button type="noBorderButton" text="15m" />
                    <Button type="noBorderButton" text="1H" />
                    <Button type="noBorderButton" text="4H" />
                    <Button type="noBorderButton" text="1D" />
                    <Button type="noBorderButton" text="1W" />
                    <BiCaretDown />
                    <BiSliderAlt />
                    <Button type="noBorderButton" text="Index Price" svg={<BiCaretDown />} />
                </div>
                <div className="charts-menu">
                    
                </div>
            </div>
            <div className="graph-body">

            </div>
        </PerpetualItem>
    )
}