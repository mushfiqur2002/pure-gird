import StyleCSS from './spinner.module.css'

export default function Spiner() {
    return (
        <div>
            <div className={StyleCSS.pure_grid_loader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
