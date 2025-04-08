
interface DBInterface {

  // General APIs
  /**
   * 
   * @param start 
   * @param count 
   * @returns Array of JSON objects
   */
  listJournalEntries(start: number, count: number): JSON[]

  /**
   * 
   * @param id 
   * @returns JSON object which fully represents the selection
   */
  getJournalEntry(id: number): JSON

  /**
   * 
   * @param start 
   * @param count 
   * @returns An array of JSON objects each of which links to a specific topic
   */
  listTopics(start: number, count: number): JSON[]

  /**
   * 
   * @param id 
   * @returns a JSON object which fully represents the selected topic
   */
  getTopic(id: number): JSON

  /**
   * 
   * @param id 
   * @returns a JSONObject which enumerates user's contributions
   */
  getUser(id: number): JSON

  // Pivot browsing APIs
  // TODO

}