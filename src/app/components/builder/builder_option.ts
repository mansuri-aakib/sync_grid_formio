export default {
    sanitize:true,
    sanitizeConfig: {
      allowedTags: ['sync-grid','emp-tab'],
      addTags: ['sync-grid','emp-tab']
    },
    
    builder:{
      basic:{
        default: false,
        weight: 1,
        components:{textarea:false}
        
      },
      custom:{
        title:'Custom Components',
        default: true,
        weight: 0
      }
    }
  }