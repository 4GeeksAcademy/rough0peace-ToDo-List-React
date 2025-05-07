<button type="button" class="btn-close" aria-label="Close"></button>

      // onClick or handleClick? where are list of event handlers 
      export default function Button() {
        function handleClick() {
          alert('You clicked me!'); // not an alert, some sort of 
        }
      
        return (
          <button onClick={handleClick}>
            Click me
          </button>
        );
      }