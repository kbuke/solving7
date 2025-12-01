
import "./TeamSection.css"

export function TeamSection({
    appData
}){

    const allTeams = appData.allTeams


    return(allTeams.map((team, index) => {
        const teamMembers = team.members
        return(
            <div key={index} className="team-container">
                <h2 className="secondary-header">
                    {team.name}
                </h2>

                <p>
                    {team.intro}
                </p>

                <div className="team-grid">
                    {teamMembers.map((member, index) => {
                        return(
                            <div 
                                key={index} 
                                className="team-card"
                            >
                                <img 
                                    src={member?.img ? member.img : "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png"}
                                    alt={`${member?.name}-img`}
                                    className="team-card-img" 
                                />

                                <div className="team-member-info">
                                    <img 
                                        src={member?.img ? member.img : "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png"}
                                        alt={`${member?.name}-img`}
                                        className="team-card-smaller-img"
                                    />
                                    <h2 className="team-member-text">
                                        {member?.name}
                                    </h2>

                                    <h3 className="team-member-text">
                                        {member?.position}
                                    </h3>

                                    {member?.email && 
                                        <h4 className="team-member-text">
                                            {member.email}
                                        </h4>
                                    }

                                    <p>
                                        {member?.intro}
                                    </p>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        )
    }))
}