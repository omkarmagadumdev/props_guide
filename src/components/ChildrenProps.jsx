
function Card({children,title,color="blue"}){
    const colorClasses = {
  blue:"border-blue-500 bg-blue-50",
  green:"border-green-500 bg-green-50",
  purple:"border-purple-500 bg-purple-50",
  red:"border-red-500 bg-red-50",

    }

    return(
      <div className={`border-l-4 ${colorClasses[color]} rounded-xl p-6 shadow-md ring-1 ring-gray-100 transition-shadow hover:shadow-lg`}>
        {title && <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3> }
        <div className="text-gray-700 leading-relaxed">{children}</div>
      </div>
    )
}

function Container({children,layout="vertical"}){

  const layoutClasses = {
    vertical:"flex flex-col space-y-4",
    horizontal:"flex flex-row flex-wrap gap-4",
    grid:"grid grid-cols-1 md:grid-cols-2 gap-4"
  }

  return(
    <div className={layoutClasses[layout]}>{children}</div>
  )
  
}

const ChildrenProps = () => {
  return (<section className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
       <h2 className="text-3xl font-bold tracking-tight text-gray-800">Children prop</h2>
       <p className="mt-2 max-w-3xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et perferendis placeat cumque rem iusto.</p>
        <div className="mt-6 space-y-6">
          <div className="pt-2">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Card component Children</h3>
            <Container className="grid">
                  <Card title="User Profile">
                    <p className="mb-2">
                      <strong>Name:</strong>Omkar
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong>Omkar@something.com
                    </p>
                    <p className="mb-2">
                      <strong>Role:</strong>Developer
                    </p>
                  </Card>
                  <Card title="Statistics" color="green">
                    <p className="mb-2">
                      <strong>Name:</strong>Tom cook
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong>timcook@something.com
                    </p>
                    <p className="mb-2">
                      <strong>Role:</strong>Founder
                    </p>
                  </Card>
                  <Card title="Quick Actions" color="purple">
                    <button className="mr-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-700">Create All</button>
                    <button className="rounded-md border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-50">View All</button>
                  </Card>
                  <Card title="Warnings" color="red">
                    <p className="rounded-md bg-red-100 px-3 py-2 text-red-800">Your trail pediod end in 5 days.plese upgrade your account</p>
                  </Card>
            </Container>
          </div>
        </div>
  
  
  </section>
  
);

}

export default ChildrenProps