import './LoadingSpinner.css';
import spinner from './spinner.svg'

export function LoadingSpinner ()
{
    return (
        <div className="LoadingSpinner">
            <img className="spinner" src={spinner} alt="Loading..." />
        </div>
    );
}
