import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const port = 3000


    //{id: 1, title: 'Alice in Wonderland', author: 'Lewis Carrol'},
    //{id: 2, title: 'Around the World in eighty days', author: 'Jules Verne'},
    //{id: 3, title: 'Utopia', author: 'Sir Thomas Moor'},
   
   
   app.get('/api/books',function(req, res) {
    const books = [

    
      {
        "id": 1,
        "title": "Understanding Depression",
        "content": "To confront depression, one must first understand it. Depression is not a sign of weakness; it is a complex interplay of biological, psychological, and environmental factors. Recognizing the symptoms, such as persistent sadness, hopelessness, and loss of interest in once-enjoyable activities, is the initial step toward facing the illness."
      },
      {
        "id": 2,
        "title": "Seeking Professional Help",
        "content": "Professional support is crucial in managing depression. Consult a mental health professional, such as a therapist or psychiatrist, who can provide a proper diagnosis and develop a tailored treatment plan. Therapy, medication, or a combination of both may be recommended based on the severity of symptoms."
      },
      {
        "id": 3,
        "title": "Building a Support System",
        "content": "Establishing a support network is essential. Share your feelings with friends, family, or support groups who can offer understanding, empathy, and encouragement. Social connections play a significant role in recovery, providing emotional support and reducing feelings of isolation."
      },
      {
        "id": 4,
        "title": "Self-Care Practices",
        "content": "Incorporate self-care into your routine. Prioritize activities that bring joy and relaxation, such as exercise, meditation, or hobbies. Adequate sleep, a balanced diet, and regular physical activity contribute to overall well-being and can positively impact mood."
      },
      {
        "id": 5,
        "title": "Setting Realistic Goals",
        "content": "Break down tasks into smaller, achievable goals. Depression can make even the simplest tasks seem overwhelming. By setting realistic objectives, you can build a sense of accomplishment and gradually regain a sense of control over your life."
      },
      {
        "id": 6,
        "title": "Cognitive Behavioral Therapy (CBT)",
        "content": "CBT is an effective therapeutic approach for depression. It helps individuals identify and challenge negative thought patterns and develop healthier coping mechanisms. Learning to reframe negative thinking can contribute to long-term recovery."
      },
      {
        "id": 7,
        "title": "Mindfulness and Meditation",
        "content": "Mindfulness practices can be powerful tools in managing depression. Mindful meditation and deep-breathing exercises can help ground you in the present moment, reducing anxiety and fostering a more positive outlook."
      },
      {
        "id": 8,
        "title": "Medication Adherence",
        "content": "If prescribed medication, it's crucial to take it as directed. Medication can help balance neurotransmitters in the brain and alleviate symptoms. Discuss any concerns or side effects with your healthcare provider."
      },
      {
        "id": 9,
        "title": "Educating Yourself",
        "content": "Knowledge is empowering. Learn more about depression and mental health to understand your condition better. Reliable resources, books, and online platforms provide valuable insights into coping strategies and success stories."
      },
      {
        "id": 10,
        "title": "Defining Anxiety Disorders",
        "content": "Anxiety is a natural response to stress, but when it becomes excessive and persistent, it can evolve into an anxiety disorder. GAD involves chronic worry and tension, while Panic Disorder is characterized by sudden and intense episodes of fear. Social Anxiety Disorder manifests as a fear of judgment in social situations, and Specific Phobias involve irrational fears of specific objects or situations."
      },
      {
        "id": 11,
        "title": "Recognizing the Signs",
        "content": "Awareness is the first step in addressing anxiety disorders. Recognizing common signs such as excessive worry, restlessness, irritability, muscle tension, and panic attacks can prompt individuals to seek help."
      },
      {
        "id": 12,
        "title": "Professional Intervention",
        "content": "Consulting with mental health professionals is crucial for an accurate diagnosis and personalized treatment plan. Therapeutic approaches, including cognitive-behavioral therapy (CBT) and exposure therapy, have proven effective in managing anxiety disorders. In some cases, medication may be prescribed to alleviate symptoms."
      },
      {
        "id": 13,
        "title": "Understanding Triggers",
        "content": "Identifying triggers for anxiety is essential. Whether they stem from specific situations, thoughts, or memories, understanding these triggers empowers individuals to develop coping strategies and reduce the impact of anxiety on their daily lives."
      },
      {
        "id": 14,
        "title": "Mindfulness and Relaxation Techniques",
        "content": "Mindfulness practices, such as meditation and deep-breathing exercises, can be powerful tools in managing anxiety. These techniques help individuals stay grounded in the present moment, promoting relaxation and reducing the impact of anxious thoughts."
      },
      {
        "id": 15,
        "title": "Gradual Exposure",
        "content": "Exposure therapy is particularly effective for specific phobias and social anxiety. Gradual and controlled exposure to feared stimuli helps desensitize individuals, allowing them to face their fears in a supportive environment."
      },
      {
        "id": 16,
        "title": "Building a Support System",
        "content": "Social support is invaluable in managing anxiety disorders. Friends, family, and support groups provide understanding, encouragement, and a sense of connection. Open communication about one's challenges fosters a supportive environment."
      },
      {
        "id": 17,
        "title": "Lifestyle Factors",
        "content": "Healthy lifestyle choices contribute to overall well-being and can positively impact anxiety levels. Adequate sleep, regular exercise, and a balanced diet play essential roles in promoting mental health."
      },
      {
        "id": 18,
        "title": "Cultivating Resilience",
        "content": "Developing resilience involves embracing challenges and setbacks as opportunities for growth. Learning to navigate stressors with a positive mindset and adaptive coping mechanisms contributes to long-term well-being."
      },
      {
        "id": 19,
        "title": "Defining Bipolar Disorder",
        "content": "Bipolar Disorder is marked by extreme mood swings, swinging between depressive lows and manic highs. Depressive episodes involve feelings of sadness, hopelessness, and low energy, while manic episodes encompass elevated mood, increased energy, impulsivity, and decreased need for sleep."
      },
      {
        "id": 20,
        "title": "Recognizing the Symptoms",
        "content": "Awareness is critical for individuals with Bipolar Disorder and their support networks. Recognizing the signs of both depressive and manic episodes, such as changes in sleep patterns, energy levels, and mood, enables early intervention and effective management."
      },
      {
        "id": 21,
        "title": "Seeking Professional Support",
        "content": "A comprehensive treatment plan often involves a combination of medication and psychotherapy. Consulting with mental health professionals, including psychiatrists and therapists, is essential to tailor interventions to an individual's specific needs."
      },
      {
        "id": 22,
        "title": "Medication Adherence",
        "content": "Medications, such as mood stabilizers and antipsychotics, are commonly prescribed to manage Bipolar Disorder. Adhering to the prescribed medication regimen is crucial for stabilizing mood and preventing the recurrence of episodes."
      },
      {
        "id": 23,
        "title": "Psychotherapy and Counseling",
        "content": "Psychotherapy, particularly Cognitive-Behavioral Therapy (CBT) and psychoeducation, can help individuals manage and understand their mood swings. Counseling provides a supportive environment to explore coping mechanisms and address challenges."
      },
      {
        "id": 24,
        "title": "Creating a Routine",
        "content": "Establishing a daily routine provides structure and stability, which is particularly beneficial during both depressive and manic phases. Consistent sleep patterns, regular meals, and planned activities contribute to overall well-being."
      },
      {
        "id": 25,
        "title": "Monitoring Triggers",
        "content": "Identifying and managing triggers for mood episodes is vital. Stress, lack of sleep, and substance use are common triggers that can exacerbate symptoms. Developing strategies to cope with stress and avoiding known triggers contribute to better mood stability."
      },
      {
        "id": 26,
        "title": "Building a Support Network",
        "content": "Social support is invaluable for individuals with Bipolar Disorder. Educating friends and family about the condition helps create understanding and fosters a supportive environment. Having a reliable support network enhances resilience during challenging times."
      },
      {
        "id": 27,
        "title": "Mindfulness and Self-Care",
        "content": "Mindfulness practices, such as meditation and deep-breathing exercises, can assist in managing stress and promoting emotional balance. Prioritizing self-care, including activities that bring joy and relaxation, contributes to overall mental well-being."
      },
      {
        "id": 28,
        "title": "Defining Schizophrenia",
        "content": "Schizophrenia is a severe mental disorder that affects approximately 1% of the global population. It involves a range of symptoms, including hallucinations (perceptions without external stimuli), delusions (false beliefs), disorganized thinking, and impaired emotional regulation."
      },
      {
        "id": 29,
        "title": "Dispelling Myths and Misconceptions",
        "content": "Misunderstandings about schizophrenia abound, contributing to stigma and isolation. It's crucial to dispel myths and foster a more accurate understanding of the disorder. Schizophrenia is not synonymous with a split personality, and individuals with schizophrenia are not inherently violent."
      },
      {
        "id": 30,
        "title": "Understanding the Symptoms",
        "content": "Symptoms of schizophrenia can be categorized into positive (added behaviors like hallucinations and delusions), negative (loss of certain abilities or functions), and cognitive (disorganized thinking). Recognizing these symptoms is vital for early intervention and effective management."
      },
      {
        "id": 31,
        "title": "Seeking Professional Diagnosis and Treatment",
        "content": "Early diagnosis and intervention are crucial for managing schizophrenia. Mental health professionals, including psychiatrists and psychologists, play a pivotal role in assessing symptoms, providing a diagnosis, and developing a personalized treatment plan."
      },
      {
        "id": 32,
        "title": "Medication Management",
        "content": "Antipsychotic medications are commonly prescribed to manage symptoms of schizophrenia. Adherence to medication regimens, as well as ongoing communication with healthcare providers to monitor and adjust treatment, is essential for long-term stability."
      },
      {
        "id": 33,
        "title": "Therapeutic Approaches",
        "content": "Psychotherapy, such as cognitive-behavioral therapy (CBT) and supportive counseling, can complement medication management. These approaches help individuals cope with symptoms, improve interpersonal relationships, and enhance overall functioning."
      },
      {
        "id": 34,
        "title": "Building a Supportive Environment",
        "content": "The support of family, friends, and the community is crucial for individuals with schizophrenia. Educating loved ones about the disorder and fostering a non-judgmental, empathetic environment can contribute to the well-being and recovery of those affected."
      },
      {
        "id": 35,
        "title": "Community Resources and Rehabilitation",
        "content": "Community resources, vocational rehabilitation programs, and supported employment initiatives can help individuals with schizophrenia reintegrate into society, fostering a sense of purpose and accomplishment."
      },
      {
        "id": 36,
        "title": "Encouraging Self-Advocacy",
        "content": "Empowering individuals with schizophrenia to advocate for themselves and participate in their treatment decisions is essential. Encouraging autonomy and self-expression contributes to a sense of agency and control."
      },
      {
        "id": 37,
        "title": "Defining PTSD",
        "content": "PTSD can arise after a person experiences or witnesses a traumatic event, such as combat, sexual assault, natural disasters, or accidents. Rather than being a sign of weakness, PTSD is a natural response to an overwhelmingly distressing situation."
      },
      {
        "id": 38,
        "title": "Recognizing Symptoms",
        "content": "Identifying the symptoms of PTSD is crucial for both individuals and their support networks. Common symptoms include intrusive memories, flashbacks, nightmares, severe anxiety, hyperarousal, avoidance of reminders, and negative changes in mood and cognition."
      },
      {
        "id": 39,
        "title": "Understanding Triggers",
        "content": "Recognizing and understanding triggers is essential in managing PTSD. Triggers can be external stimuli, situations, or even internal thoughts and feelings that evoke memories of the traumatic event. Identifying and navigating these triggers is a key aspect of coping with PTSD."
      },
      {
        "id": 40,
        "title": "Seeking Professional Help",
        "content": "A mental health professional, such as a therapist or psychiatrist, can provide an accurate diagnosis and develop a tailored treatment plan for PTSD. Evidence-based therapies, including Cognitive-Behavioral Therapy (CBT) and Eye Movement Desensitization and Reprocessing (EMDR), are effective in addressing symptoms."
      },
      {
        "id": 41,
        "title": "Medication Management",
        "content": "In some cases, medication may be prescribed to alleviate symptoms of PTSD, particularly when they are severe. Antidepressants, anti-anxiety medications, or sleep aids may be part of the treatment plan."
      },
      {
        "id": 42,
        "title": "Coping Strategies",
        "content": "Developing coping strategies is crucial in managing symptoms. Mindfulness techniques, deep-breathing exercises, and grounding exercises can help individuals stay present and manage anxiety. Engaging in activities that bring a sense of safety and relaxation is also beneficial."
      },
      {
        "id": 43,
        "title": "Supportive Relationships",
        "content": "Building a strong support network is vital for individuals with PTSD. Friends, family, and support groups can provide understanding, empathy, and encouragement. Open communication about triggers and boundaries fosters a supportive environment."
      },
      {
        "id": 44,
        "title": "Educating Loved Ones",
        "content": "Educating friends and family about PTSD is important to enhance understanding and reduce stigma. Loved ones can play a key role in providing support, recognizing signs of distress, and encouraging professional help when needed."
      },
      {
        "id": 45,
        "title": "Empowerment Through Treatment",
        "content": "Taking an active role in the treatment process empowers individuals with PTSD. Setting realistic goals, participating in therapy, and advocating for one's needs contribute to a sense of agency and control over the recovery journey."
      },
      {
        "id": 46,
        "title": "Defining ADHD",
        "content": "ADHD is a neurodevelopmental disorder that manifests in childhood and often persists into adulthood. The three main subtypes are predominantly inattentive, predominantly hyperactive-impulsive, and combined presentation. Individuals with ADHD may struggle with tasks that require sustained attention, organization, and impulse control."
      },
      {
        "id": 47,
        "title": "Recognizing Symptoms",
        "content": "Identifying symptoms of ADHD is crucial for early intervention. Common signs include difficulty sustaining attention, frequent careless mistakes, forgetfulness, impulsivity, restlessness, and difficulty waiting one's turn. The presentation of symptoms can vary, making it essential to consider the individual's unique profile."
      },
      {
        "id": 49,
        "title": "Diagnosis and Treatment",
        "content": "Seeking a professional diagnosis is the first step toward managing ADHD. Healthcare providers, including psychologists and psychiatrists, use clinical assessments and criteria outlined in the Diagnostic and Statistical Manual of Mental Disorders (DSM-5) to diagnose ADHD. Treatment may involve behavioral interventions, psychoeducation, and in some cases, medication."
      },
      {
        "id": 50,
        "title": "Behavioral Strategies",
        "content": "Behavioral interventions play a central role in managing ADHD. Strategies may include breaking tasks into smaller, manageable steps, using visual aids for organization, setting clear routines, and providing positive reinforcement for desired behaviors. Consistency and structure are key elements in supporting individuals with ADHD."
      },
      {
        "id": 51,
        "title": "Educational Support",
        "content": "In academic settings, individuals with ADHD may benefit from tailored educational support. Accommodations such as extended time on tests, preferential seating, and additional organizational assistance can help create an environment conducive to learning."
      },
      {
        "id": 52,
        "title": "Counseling and Psychoeducation",
        "content": "Counseling, particularly cognitive-behavioral therapy (CBT), can be beneficial for individuals with ADHD. Psychoeducation helps individuals understand their unique strengths and challenges, fostering self-awareness and effective coping strategies."
      },
      {
        "id": 53,
        "title": "Medication Management",
        "content": "In some cases, healthcare providers may recommend medication, such as stimulants or non-stimulants, to manage symptoms of ADHD. Medication can enhance attention and impulse control, but it is only one component of a comprehensive treatment plan."
      },
      {
        "id": 54,
        "title": "Supportive Environment",
        "content": "Creating a supportive environment at home, school, and work is essential for individuals with ADHD. Open communication, understanding, and flexibility contribute to a positive atmosphere where individuals can thrive."
      },
      {
        "id": 55,
        "title": "Defining OCD",
        "content": "OCD is a chronic mental health disorder characterized by the presence of obsessions and compulsions. Obsessions are intrusive and distressing thoughts, images, or urges, while compulsions are repetitive behaviors or mental acts performed to alleviate the anxiety associated with obsessions."
      },
      {
        "id": 56,
        "title": "Recognizing Symptoms",
        "content": "Identifying symptoms of OCD involves understanding the nature of obsessions and compulsions. Common obsessions include fears of contamination, harm to oneself or others, and fears of making a mistake. Compulsions often manifest as rituals or repetitive behaviors, such as excessive handwashing, checking, or mental rituals."
      },
      {
        "id": 57,
        "title": "Diagnosis and Treatment",
        "content": "Seeking a professional diagnosis is crucial for individuals with OCD. Mental health professionals, including psychologists and psychiatrists, use standardized assessments to diagnose OCD. Treatment may involve a combination of cognitive-behavioral therapy (CBT), exposure and response prevention (ERP), and, in some cases, medication."
      },
      {
        "id": 58,
        "title": "Cognitive-Behavioral Therapy (CBT)",
        "content": "CBT is a widely used therapeutic approach for OCD. It involves identifying and challenging irrational thoughts, developing healthier beliefs, and gradually exposing individuals to situations that trigger anxiety without engaging in compulsive behaviors."
      },
      {
        "id": 59,
        "title": "Exposure and Response Prevention (ERP)",
        "content": "ERP is a specific form of CBT that focuses on exposing individuals to feared thoughts or situations and preventing the accompanying compulsive rituals. This process helps individuals tolerate anxiety and break the cycle of obsessions and compulsions."
      },
      {
        "id": 60,
        "title": "Medication Management",
        "content": "Selective serotonin reuptake inhibitors (SSRIs) are commonly prescribed to manage symptoms of OCD. These medications can help regulate neurotransmitters in the brain and alleviate anxiety. Medication is often used in conjunction with psychotherapy."
      },
      {
        "id": 61,
        "title": "Building a Support System",
        "content": "Support from friends and family is invaluable for individuals with OCD. Understanding the nature of the disorder, being patient, and participating in the treatment process contribute to a positive support system."
      },
      {
        "id": 62,
        "title": "Mindfulness and Stress Reduction",
        "content": "Mindfulness practices, such as meditation and deep-breathing exercises, can assist individuals in managing stress and anxiety associated with OCD. Developing mindfulness skills enhances overall emotional well-being."
      },
      {
        "id": 63,
        "title": "Anorexia Nervosa",
        "content": "Anorexia nervosa is characterized by an intense fear of gaining weight, leading to severe restrictions in food intake and an unhealthy preoccupation with body weight and shape. Individuals with anorexia often perceive themselves as overweight, even when underweight."
      },
      {
        "id": 64,
        "title": "Bulimia Nervosa",
        "content": "Bulimia nervosa involves recurrent episodes of binge eating, during which individuals consume large quantities of food in a short period, followed by compensatory behaviors such as vomiting, excessive exercise, or fasting. Individuals with bulimia often experience feelings of guilt and shame."
      },
      {
        "id": 65,
        "title": "Binge-Eating Disorder",
        "content": "Binge-eating disorder is marked by recurrent episodes of consuming large amounts of food without engaging in compensatory behaviors. Individuals with binge-eating disorder often feel a loss of control during these episodes and may eat even when not physically hungry."
      },
      {
        "id": 66,
        "title": "Recognizing Symptoms",
        "content": "Identifying symptoms of eating disorders involves understanding changes in eating habits, body weight, and emotional well-being. Signs may include extreme weight loss, preoccupation with food, rituals around eating, frequent dieting, and changes in social behavior."
      },
      {
        "id": 67,
        "title": "Addressing Underlying Factors",
        "content": "Eating disorders often have complex underlying factors, including societal pressures, genetics, trauma, and psychological factors. Understanding and addressing these factors are crucial components of effective treatment."
      },
      {
        "id": 68,
        "title": "Seeking Professional Help",
        "content": "Professional intervention is essential for individuals with eating disorders. Treatment may involve a multidisciplinary approach, including psychotherapy, nutritional counseling, and medical monitoring. In severe cases, hospitalization may be necessary."
      },
      {
        "id": 69,
        "title": "Psychotherapy and Counseling",
        "content": "Psychotherapy, particularly cognitive-behavioral therapy (CBT), is a common therapeutic approach for eating disorders. Counseling helps individuals explore the root causes of their behaviors, develop healthier coping mechanisms, and foster a positive relationship with food."
      },
      {
        "id": 70,
        "title": "Nutritional Rehabilitation",
        "content": "Nutritional counseling plays a vital role in restoring a healthy relationship with food. Dietitians work with individuals to establish balanced and sustainable eating patterns that promote physical and mental well-being."
      },
      {
        "id": 71,
        "title": "Support from Loved Ones",
        "content": "Building a strong support network is crucial for individuals recovering from eating disorders. Friends and family can provide understanding, encouragement, and emotional support throughout the recovery journey."
      },
      {
        "id": 72,
        "title": "Promoting Body Positivity",
        "content": "Fostering a positive body image and challenging societal standards of beauty are integral aspects of recovery. Embracing body positivity and self-acceptance contributes to a healthier mindset."
      }
    ]
    res.json(books)
   })

app.get('/', (req, res) => {
 res.send('Hello World!')
})
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`)
})