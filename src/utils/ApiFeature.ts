export class ApiFeature {
    mongooseQuery:any
    queryString:any
    pagination:any
    public constructor(mongooseQuery:any , queryString:any){
        this.mongooseQuery = mongooseQuery
        this.queryString = queryString
    }

    search() {
        if (this.queryString.keyword) {
            console.log(this.queryString.keyword)
          let query:any = {};
         
            query.$or = [
              { CustomerID: { $regex: this.queryString.keyword, $options: 'i' } },
            ];
         
    
          this.mongooseQuery = this.mongooseQuery.find(query);
        }
        return this;
      }

    paginate(countDecument:number){
        //paginate
        const page = Number(this.queryString?.page) || 1
        const limit = Number(this.queryString?.limit)|| 5
        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const pagination:{
            currentPage?:number,
            limit?:number,
            numberOfPage?:number,
            next?:number,
            prev?:number
        } = {}

        pagination.currentPage = page
        pagination.limit = limit
        pagination.numberOfPage = Math.ceil(countDecument / limit)

        if(endIndex < countDecument){
            pagination.next = page + 1
        }
        if(startIndex > 0){
            pagination.prev = page - 1
        }

        this.pagination = pagination

        this.mongooseQuery = this.mongooseQuery.skip(startIndex).limit(limit)

        return this 
    }
}
