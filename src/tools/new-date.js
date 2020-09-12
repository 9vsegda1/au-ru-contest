const newDate = () => {
  const options = {
    
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  
  
  return new Date().toLocaleString("ru", options)  
}

export default newDate