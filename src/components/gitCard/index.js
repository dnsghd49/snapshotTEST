import { useState, useEffect } from "react"

function GitCard() {
    const [githubName, setgithubName] = useState()

    useEffect(() => {
        fetch('https://api.github.com/users/dnsghd49')
          .then(res => res.json())
          .then(data => {
            setgithubName(data.name)
            console.log(data)
          })
      }, [])

    return (
        <div>
            <h2>{githubName}</h2>
        </div>
    )
}

export default GitCard